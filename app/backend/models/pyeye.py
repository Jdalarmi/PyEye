from database.connection import engine, Base
from sqlalchemy import Column, String, Integer, Float

class Analytics(Base):
    __tablename__ = "analytics"

    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String)
    time_exposed = Column(Integer)
    rest_time = Column(Integer)
    shine_screen = Column(Integer)
    distance_screen = Column(Integer)
    score = Column(Integer)


def create_tables():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    create_tables()