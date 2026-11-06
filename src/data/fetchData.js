const GAME_LIST_URL = "https://www.freetogame.com/api/games?platform=pc";
const GAME_DETAILS_URL = "https://www.freetogame.com/api/game?id="


export const fetchData = async () => {
    try {
        const response = await fetch(GAME_LIST_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export const fetchGameById = async (gameId) => {
    try {
        const response = await fetch(GAME_DETAILS_URL + gameId)
        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error("Error fetching data: ", error)
        throw error
    }
}
