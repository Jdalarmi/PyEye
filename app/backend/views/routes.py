from fastapi import APIRouter
from pydantic import BaseModel
from database.connection import SessionLocal
from fastapi.responses import JSONResponse

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
async def received():
    return JSONResponse(content={"Data":"data"})