from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class LoginRequest(BaseModel):
    email: str
    password: str


@app.get("/")
def home():
    return {
        "message": "Welcome to Enterprise AI Agent Platform Authentication Service"
    }


@app.post("/login")
def login(login_data: LoginRequest):
    return {
        "message": "Login API Working Successfully",
        "email": login_data.email,
        "password": login_data.password
    }