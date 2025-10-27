from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://kushs.dev", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

AIRTABLE_API_KEY = os.getenv("AIRTABLE_API_KEY")
BASE_ID = os.getenv("BASE_ID")
TABLE_ID = os.getenv("TABLE_ID")

@app.get("/projects")
async def get_projects():
    url = f"https://api.airtable.com/v0/{BASE_ID}/{TABLE_ID}"
    headers = {"Authorization": f"Bearer {AIRTABLE_API_KEY}"}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)

    if response.status_code != 200:
        print(response.json())
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch Airtable data")

    data = response.json()
    projects = [
        {"id": record["id"], **fields}
        for record in data.get("records", [])
        if (fields := record.get("fields")) and any(
            (v is not None) and (v != "") and not (isinstance(v, list) and len(v) == 0)
            for v in fields.values()
        )
    ]
    print(projects)
    return {"projects": projects}
