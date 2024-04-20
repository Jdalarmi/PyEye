from database.connection import engine, Base
from sqlalchemy import Column, String, Integer, Float

class Pedidos(Base):
    __tablename__ = "pedidos"

    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String)
    time_exposed = Column(Float)
    rest_time = Column(String)
    shine_screen = Column(String)
    distance_screen = Column(Integer)


def create_tables():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    create_tables()