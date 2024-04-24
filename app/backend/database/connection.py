from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import os
from dotenv import load_dotenv

load_dotenv()

user=os.getenv('USER')
password=os.getenv("PASSWORD")
host=os.getenv("HOST")
db=os.getenv("DB")

SQLALCHEMY_DATABASE_URL = f'postgresql://{user}:{password}@{host}/{db}'

# SQLALCHEMY_DATABASE_URL = 'sqlite:///dados.db'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()