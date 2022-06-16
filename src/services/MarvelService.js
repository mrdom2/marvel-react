class MarvelService {
    _apiBase = "https://gateway.marvel.com:443/v1/public/";
    _apiKey = "apikey=9ad839a9c88d121575614a5606a17237";

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getSingleCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (myChar) => {
        return {
            id: myChar.id,
            name: myChar.name,
            description: myChar.description ? `${myChar.description.slice(0, 210)}...` : 'No desciption for current character',
            thumbnail: `${myChar.thumbnail.path}.${myChar.thumbnail.extension}`,
            homepage: myChar.urls[0].url,
            wiki: myChar.urls[1].url,
            comics: myChar.comics.items
        }
    }
}

export default MarvelService;

