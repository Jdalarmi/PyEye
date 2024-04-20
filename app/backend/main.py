from fastapi import FastAPI
from views import routes
from models.pyeye import create_tables
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


create_tables()

app.include_router(routes.router)
