from fastapi import FastAPI
from pydantic import BaseModel
from services.quote_service import generate_quote
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuoteRequest(BaseModel):
    keyword: str

@app.post("/generate")
async def create_quote(request: QuoteRequest):
    quote = generate_quote(request.keyword)
    return {"quote": quote}