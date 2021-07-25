# Synchronkartei API Server

This is a simple API server that will fetch data from Synchronkartei.de and serve it as JSON.

## How it works

When an endpoint of this API is called, it will grab the HTML code from Synchronkartei.de.
All needed data is extracted from the HTML file.

The fetched data will be cached for 24 hours. That means only the first request of the day actually connects to Synchronkartei.de.
Subsequent requests will not connect to Synchronkartei.de and be served from the internal cache.

## Endpoints

The endpoints aim to resemble the original endpoints.

### `/serie/:id` – Series information

**Example:**

API URL: https://localhost:3000/serie/31669

Response:
```json
{
   "response": {
      "fromCache": false
   },
   "serie": {
      "id": "31669",
      "name": "Magic Kaito",
      "details": {
         "studio": "TV+Synchron GmbH, Berlin",
         "writers": [
            
         ],
         "directors": [
            "Daniel Anderson"
         ],
         "actors": [
            {
               "actor_name": "Julien Haggège",
               "original_actor_name": "Kappei Yamaguchi",
               "role_name": "Kaito Kuroba / Kaito Kid"
            },
            {
               "actor_name": "Angelina Geisler",
               "original_actor_name": "Ai Kayano",
               "role_name": "Keiko Momoi"
            },
            {
               "actor_name": "Sven Gerhardt",
               "original_actor_name": "Unshou Ishizuka",
               "role_name": "Ginzou Nakamori"
            },
            {
               "actor_name": "Jenny Maria Meyer",
               "original_actor_name": "Ayumi Fujimura",
               "role_name": "Aoko Nakamori"
            },
            {
               "actor_name": "Reinhard Scheunemann",
               "original_actor_name": "Kouji Yada",
               "role_name": "Kounosuke Jii"
            },
            {
               "actor_name": "Konrad Bösherz",
               "original_actor_name": "Akira Ishida",
               "role_name": "Saguru Hakuba"
            },
            {
               "actor_name": "Uwe Jellinek",
               "original_actor_name": "Kazuhiro Nakaya",
               "role_name": "Inspektor Konno"
            },
            {
               "actor_name": "Thomas Schmuckert",
               "original_actor_name": "Keiji Hirai",
               "role_name": "Inspektor Yamabuki"
            },
            {
               "actor_name": "Denise Gorzelanny",
               "original_actor_name": "Naomi Shindou",
               "role_name": "Kaitos Lehrerin"
            },
            {
               "actor_name": "Melanie Isakowitz",
               "original_actor_name": "Miyuki Sawashiro",
               "role_name": "Akako Koizumi"
            },
            {
               "actor_name": "Hans Hohlbein",
               "original_actor_name": "Mugihito",
               "role_name": "Akakos Butler"
            },
            {
               "actor_name": "Nina Herting",
               "original_actor_name": "Urara Takano",
               "role_name": "Alice"
            },
            {
               "actor_name": "Denise Gorzelanny",
               "original_actor_name": "Michie Tomizawa",
               "role_name": "Chikage Kuroba"
            },
            {
               "actor_name": "Jens-Uwe Bogadtke",
               "original_actor_name": "Naoya Uchida",
               "role_name": "Dan Mitsuishi"
            },
            {
               "actor_name": "Gerrit Hamann",
               "original_actor_name": "Tooru Ookawa",
               "role_name": "Direktor"
            },
            {
               "actor_name": "Christian Intorp",
               "original_actor_name": "Yuusaku Yara",
               "role_name": "Doron"
            },
            {
               "actor_name": "Christian Zeiger",
               "original_actor_name": "Yuuji Mitsuya",
               "role_name": "Fujie"
            },
            {
               "actor_name": "Nina Herting",
               "original_actor_name": "Reiko Suzuki",
               "role_name": "Haushälterin"
            },
            {
               "actor_name": "Sebastian Christoph Jacob",
               "original_actor_name": "Nobuo Tobita",
               "role_name": "Jack Connery"
            },
            {
               "actor_name": "Judith Hoersch",
               "original_actor_name": "Youko Hikasa",
               "role_name": "Jody Hopper"
            },
            {
               "actor_name": "Peggy Pollow",
               "original_actor_name": "Ryou Hirohashi",
               "role_name": "Junge"
            },
            {
               "actor_name": "Peggy Pollow",
               "original_actor_name": "Junko Iwao",
               "role_name": "Kenta Connery"
            },
            {
               "actor_name": "Jessica Walther-Gabory",
               "original_actor_name": "Masako Ikeda",
               "role_name": "Königin"
            },
            {
               "actor_name": "Sven Brieger",
               "original_actor_name": "Hidekatsu Shibata",
               "role_name": "Lucifer"
            },
            {
               "actor_name": "Simon Derksen",
               "original_actor_name": "Tetsu Inada",
               "role_name": "Paul"
            },
            {
               "actor_name": "Uwe Jellinek",
               "original_actor_name": "Takashi Nagasako",
               "role_name": "Polizeipräsident Hakuba"
            },
            {
               "actor_name": "Sarah Alles",
               "original_actor_name": "Akiko Yajima",
               "role_name": "Prinz Philipp"
            },
            {
               "actor_name": "Anita Hopt",
               "original_actor_name": "Aoi Yuuki",
               "role_name": "Prinzessin Ann"
            },
            {
               "actor_name": "Anja Rybiczka",
               "original_actor_name": "Hiromi Konno",
               "role_name": "Reporterin Konno"
            },
            {
               "actor_name": "Joachim Siebenschuh",
               "original_actor_name": "Osamu Saka",
               "role_name": "Robert"
            },
            {
               "actor_name": "Katharina Spiering",
               "original_actor_name": "Atsuko Tanaka",
               "role_name": "Ruby Jones"
            },
            {
               "actor_name": "Bernd Vollbrecht",
               "original_actor_name": "Nobuo Tanaka",
               "role_name": "Shintarou Chaki"
            },
            {
               "actor_name": "Rainer Doering",
               "original_actor_name": "Houchuu Ootsuka",
               "role_name": "Snake"
            },
            {
               "actor_name": "Jan Spitzer",
               "original_actor_name": "Shouzou Iizuka",
               "role_name": "Snakes Boss"
            },
            {
               "actor_name": "Steven Merting",
               "original_actor_name": "Daisuke Namikawa",
               "role_name": "Spider"
            },
            {
               "actor_name": "Martin Brücker",
               "original_actor_name": "Shuuichi Ikeda",
               "role_name": "Touichi Kuroba"
            }
         ]
      }
   }
}
```

### `/film/:id` – Movie information

**Example:**

API URL: https://localhost:3000/film/38462

Response:
```json
{
  "response": {
    "fromCache": false
  },
  "film": {
    "id": "38462",
    "name": "Otto - Der Film",
    "details": {
      "studio": "",
      "writers": [

      ],
      "directors": [

      ],
      "actors": [
        {
          "actor_name": "Otto Waalkes",
          "original_actor_name": "Wolfgang Kleff",
          "role_name": "Friseur Herr Astrid"
        },
        {
          "actor_name": "Otto Waalkes",
          "original_actor_name": "Günther Kaufmann",
          "role_name": "US-Soldat (1. Szene)"
        }
      ]
    }
  }
}
```
