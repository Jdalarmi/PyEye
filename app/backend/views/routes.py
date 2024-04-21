from http.client import HTTPException
from fastapi import APIRouter
from pydantic import BaseModel, Field
from database.connection import SessionLocal
from fastapi.responses import JSONResponse
from fastapi import status


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
async def received(pyeye: Pyeye):
    if pyeye.time_exposed > 50:
        print(pyeye.time_exposed)
    return JSONResponse(content={"Dados":"OK"})