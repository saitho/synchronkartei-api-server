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
    "id": 31669,
    "name": "Magic Kaito",
    "details": {
      "studio": "TV+Synchron GmbH, Berlin",
      "writers": [],
      "directors": [
        "Daniel Anderson"
      ],
      "actors": [
        {
          "actor": {
            "id": 236,
            "name": "Julien Haggège"
          },
          "original_actor": {
            "id": null,
            "name": "Kappei Yamaguchi"
          },
          "role_name": "Kaito Kuroba / Kaito Kid"
        },
        {
          "actor": {
            "id": 5153,
            "name": "Angelina Geisler"
          },
          "original_actor": {
            "id": null,
            "name": "Ai Kayano"
          },
          "role_name": "Keiko Momoi"
        },
        {
          "actor": {
            "id": 2976,
            "name": "Sven Gerhardt"
          },
          "original_actor": {
            "id": null,
            "name": "Unshou Ishizuka"
          },
          "role_name": "Ginzou Nakamori"
        },
        {
          "actor": {
            "id": 7366,
            "name": "Jenny Maria Meyer"
          },
          "original_actor": {
            "id": null,
            "name": "Ayumi Fujimura"
          },
          "role_name": "Aoko Nakamori"
        },
        {
          "actor": {
            "id": 981,
            "name": "Reinhard Scheunemann"
          },
          "original_actor": {
            "id": null,
            "name": "Kouji Yada"
          },
          "role_name": "Kounosuke Jii"
        },
        {
          "actor": {
            "id": 60,
            "name": "Konrad Bösherz"
          },
          "original_actor": {
            "id": null,
            "name": "Akira Ishida"
          },
          "role_name": "Saguru Hakuba"
        },
        {
          "actor": {
            "id": 1740,
            "name": "Uwe Jellinek"
          },
          "original_actor": {
            "id": null,
            "name": "Kazuhiro Nakaya"
          },
          "role_name": "Inspektor Konno"
        },
        {
          "actor": {
            "id": 1800,
            "name": "Thomas Schmuckert"
          },
          "original_actor": {
            "id": null,
            "name": "Keiji Hirai"
          },
          "role_name": "Inspektor Yamabuki"
        },
        {
          "actor": {
            "id": 213,
            "name": "Denise Gorzelanny"
          },
          "original_actor": {
            "id": null,
            "name": "Naomi Shindou"
          },
          "role_name": "Kaitos Lehrerin"
        },
        {
          "actor": {
            "id": 4652,
            "name": "Melanie Isakowitz"
          },
          "original_actor": {
            "id": null,
            "name": "Miyuki Sawashiro"
          },
          "role_name": "Akako Koizumi"
        },
        {
          "actor": {
            "id": 292,
            "name": "Hans Hohlbein"
          },
          "original_actor": {
            "id": null,
            "name": "Mugihito"
          },
          "role_name": "Akakos Butler"
        },
        {
          "actor": {
            "id": 3063,
            "name": "Nina Herting"
          },
          "original_actor": {
            "id": null,
            "name": "Urara Takano"
          },
          "role_name": "Alice"
        },
        {
          "actor": {
            "id": 213,
            "name": "Denise Gorzelanny"
          },
          "original_actor": {
            "id": null,
            "name": "Michie Tomizawa"
          },
          "role_name": "Chikage Kuroba"
        },
        {
          "actor": {
            "id": 2456,
            "name": "Jens-Uwe Bogadtke"
          },
          "original_actor": {
            "id": null,
            "name": "Naoya Uchida"
          },
          "role_name": "Dan Mitsuishi"
        },
        {
          "actor": {
            "id": 4008,
            "name": "Gerrit Hamann"
          },
          "original_actor": {
            "id": null,
            "name": "Tooru Ookawa"
          },
          "role_name": "Direktor"
        },
        {
          "actor": {
            "id": 7583,
            "name": "Christian Intorp"
          },
          "original_actor": {
            "id": null,
            "name": "Yuusaku Yara"
          },
          "role_name": "Doron"
        },
        {
          "actor": {
            "id": 1993,
            "name": "Christian Zeiger"
          },
          "original_actor": {
            "id": null,
            "name": "Yuuji Mitsuya"
          },
          "role_name": "Fujie"
        },
        {
          "actor": {
            "id": 3063,
            "name": "Nina Herting"
          },
          "original_actor": {
            "id": null,
            "name": "Reiko Suzuki"
          },
          "role_name": "Haushälterin"
        },
        {
          "actor": {
            "id": 1510,
            "name": "Sebastian Christoph Jacob"
          },
          "original_actor": {
            "id": null,
            "name": "Nobuo Tobita"
          },
          "role_name": "Jack Connery"
        },
        {
          "actor": {
            "id": 5170,
            "name": "Judith Hoersch"
          },
          "original_actor": {
            "id": null,
            "name": "Youko Hikasa"
          },
          "role_name": "Jody Hopper"
        },
        {
          "actor": {
            "id": 5390,
            "name": "Peggy Pollow"
          },
          "original_actor": {
            "id": null,
            "name": "Ryou Hirohashi"
          },
          "role_name": "Junge"
        },
        {
          "actor": {
            "id": 5390,
            "name": "Peggy Pollow"
          },
          "original_actor": {
            "id": null,
            "name": "Junko Iwao"
          },
          "role_name": "Kenta Connery"
        },
        {
          "actor": {
            "id": 3747,
            "name": "Jessica Walther-Gabory"
          },
          "original_actor": {
            "id": null,
            "name": "Masako Ikeda"
          },
          "role_name": "Königin"
        },
        {
          "actor": {
            "id": 4773,
            "name": "Sven Brieger"
          },
          "original_actor": {
            "id": null,
            "name": "Hidekatsu Shibata"
          },
          "role_name": "Lucifer"
        },
        {
          "actor": {
            "id": 6319,
            "name": "Simon Derksen"
          },
          "original_actor": {
            "id": null,
            "name": "Tetsu Inada"
          },
          "role_name": "Paul"
        },
        {
          "actor": {
            "id": 1740,
            "name": "Uwe Jellinek"
          },
          "original_actor": {
            "id": null,
            "name": "Takashi Nagasako"
          },
          "role_name": "Polizeipräsident Hakuba"
        },
        {
          "actor": {
            "id": 6348,
            "name": "Sarah Alles"
          },
          "original_actor": {
            "id": null,
            "name": "Akiko Yajima"
          },
          "role_name": "Prinz Philipp"
        },
        {
          "actor": {
            "id": 2863,
            "name": "Anita Hopt"
          },
          "original_actor": {
            "id": null,
            "name": "Aoi Yuuki"
          },
          "role_name": "Prinzessin Ann"
        },
        {
          "actor": {
            "id": 2510,
            "name": "Anja Rybiczka"
          },
          "original_actor": {
            "id": null,
            "name": "Hiromi Konno"
          },
          "role_name": "Reporterin Konno"
        },
        {
          "actor": {
            "id": 635,
            "name": "Joachim Siebenschuh"
          },
          "original_actor": {
            "id": null,
            "name": "Osamu Saka"
          },
          "role_name": "Robert"
        },
        {
          "actor": {
            "id": 3870,
            "name": "Katharina Spiering"
          },
          "original_actor": {
            "id": null,
            "name": "Atsuko Tanaka"
          },
          "role_name": "Ruby Jones"
        },
        {
          "actor": {
            "id": 711,
            "name": "Bernd Vollbrecht"
          },
          "original_actor": {
            "id": null,
            "name": "Nobuo Tanaka"
          },
          "role_name": "Shintarou Chaki"
        },
        {
          "actor": {
            "id": 133,
            "name": "Rainer Doering"
          },
          "original_actor": {
            "id": null,
            "name": "Houchuu Ootsuka"
          },
          "role_name": "Snake"
        },
        {
          "actor": {
            "id": 649,
            "name": "Jan Spitzer"
          },
          "original_actor": {
            "id": null,
            "name": "Shouzou Iizuka"
          },
          "role_name": "Snakes Boss"
        },
        {
          "actor": {
            "id": 2961,
            "name": "Steven Merting"
          },
          "original_actor": {
            "id": null,
            "name": "Daisuke Namikawa"
          },
          "role_name": "Spider"
        },
        {
          "actor": {
            "id": 6532,
            "name": "Martin Brücker"
          },
          "original_actor": {
            "id": null,
            "name": "Shuuichi Ikeda"
          },
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
    "id": 38462,
    "name": "Otto - Der Film",
    "details": {
      "studio": "",
      "writers": [],
      "directors": [],
      "actors": [
        {
          "actor": {
            "id": 729,
            "name": "Otto Waalkes"
          },
          "original_actor": {
            "id": null,
            "name": "Wolfgang Kleff"
          },
          "role_name": "Friseur Herr Astrid"
        },
        {
          "actor": {
            "id": 729,
            "name": "Otto Waalkes"
          },
          "original_actor": {
            "id": null,
            "name": "Günther Kaufmann"
          },
          "role_name": "US-Soldat (1. Szene)"
        }
      ]
    }
  }
}
```
