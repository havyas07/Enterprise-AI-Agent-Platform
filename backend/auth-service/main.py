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

    stored_email = "admin@enterpriseai.com"
    stored_password = "Admin123"

    if login_data.email != stored_email:
        return {
            "success": False,
            "message": "User not found"
        }

    if login_data.password != stored_password:
        return {
            "success": False,
            "message": "Invalid password"
        }

    return {
        "success": True,
        "message": "Login Successful"
    }