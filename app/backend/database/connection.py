from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import os
from dotenv import load_dotenv

load_dotenv()

data_base_url = os.getenv("DATABASE_URL")

SQLALCHEMY_DATABASE_URL = f'{data_base_url}'

#SQLALCHEMY_DATABASE_URL = 'sqlite:///dados.db'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()