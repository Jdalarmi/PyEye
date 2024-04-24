from http.client import HTTPException
from fastapi import APIRouter, Depends
from pydantic import BaseModel, Field
from requests import Session
from database.connection import SessionLocal
from fastapi.responses import JSONResponse
from models.pyeye import Analytics
from controllers.analytics import impact_on_vision

class Pyeye(BaseModel):
    user_name: str = Field(max_length=15)
    time_exposed: int
    rest_time: int
    shine_screen: int
    distance_screen: int


router = APIRouter(
    prefix= '/v1',
    tags=['authorize']
)

"""Create depence for DB for save credentials"""
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/received/pyeye")
async def received(pyeye: Pyeye, db: Session = Depends(get_db)):
    if pyeye.user_name == "":
        return JSONResponse(status_code=400, content={"Erro": "Campo nome vazio"})
    number = any(char.isdigit() for char in pyeye.user_name)
    if number:
        return JSONResponse(status_code=400, content={"Erro": "Nome contém numeros"})

    analytics = Analytics(
        user_name=pyeye.user_name,
        time_exposed = pyeye.time_exposed,
        rest_time = pyeye.rest_time,
        shine_screen = pyeye.shine_screen,
        distance_screen = pyeye.distance_screen
    )
    db.add(analytics)
    db.commit()

    score = impact_on_vision(pyeye.time_exposed, pyeye.rest_time,
                             pyeye.shine_screen, pyeye.distance_screen)

    if score <= 50:
        return JSONResponse(status_code=200, content={"Score":score, "Description":"Parabéns pelo seu score. "
                                                      "Ele se resume em bons habitos em frente a tela."})

    if score > 50 and score <= 70:
        return JSONResponse(status_code=200, content={"Score":score, "Description":"Seu score esta acima do recomendado. "
                                                      "Isso pode resumir em melhorar alguns habitos como: "
                                                      "Diminuir brilho ou aumentar a sua distancia da tela."})
    if score > 70:
        return JSONResponse(status_code=200, content={"Score":score, "Description":"Atenção para seu score elevado"
                                                      "Isso pode resumir em danos a sua saúde visual. "
                                                      "Pode ser necessario mudar alguns habitos!"})
    print(score)