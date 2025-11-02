from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sympy as sp

app = FastAPI()

# Allow frontend requests.Without this, you’d get a CORS error
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Calculator backend running!"}

@app.get("/calculate")
def calculate(expression: str):
    try:
        result = sp.sympify(expression).evalf()
        return {"result": float(result)}
    except Exception as e:
        return {"error": "Invalid expression"}
