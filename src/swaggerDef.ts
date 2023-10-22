export const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "List and handle API SpaceX.",
    description:
      "In this project, the SpaceX API (https://github.com/r-spacex/SpaceX-API) provides info about rocket's launches made by company. When the server is started, a script get this informations and save at mongoDB handled for this project. Furtermore, a CRON call a funcation at 9:00 am, every day, to get the latest launch, and update at mongoDB. In this project there'r four routes, list launches with pagination and search by name rocket, home that's just apresentation, stats to pice graphic and stats to vertical bar graphic.",
    contact: {
      phone: "+55(84)981758502",
      email: "haryssonsoares@gmail.com",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "If you run this project locally",
    },
    {
      url: "https://unkow-yet",
      description: "To access routes in production",
    },
  ],
  paths: {
    "/": {
      get: {
        summary: "Apresentation router",
        description: "Return a apresentation message",
        tags: ["Apresentation"],
        "responses:": {
          "200": {
            desription: "Fullstack Challenge 🏅 - Space X API",
          },
          "304": {
            desription: "Fullstack Challenge 🏅 - Space X API",
          },
          "400": {
            description: "Sorry, something is worng at home router...",
          },
        },
      },
    },
    "/launches?search=<porperty_name>&limit=<number>&page=<number>": {
      get: {
        summary: "List all launches",
        description:
          "Return all launches and accept query param router 'search' thats filter launches by name porperty. Futermore, 'limit' and 'page' can be pass at query param router to paginate the request. All the params are optionals",
        tags: ["Launch"],
        "responses:": {
          "200": {
            desription: "Fullstack Challenge 🏅 - Space X API",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  $ref: "#/components/schemas/Launch",
                },
              },
            },
          },
          "304": {
            desription: "Fullstack Challenge 🏅 - Space X API",
          },
          "400": {
            description: "Sorry, something is worng at home router...",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Launch: {
        type: "object",
        properties: {
          links: {
            type: "object",
            properties: {
              patch: {
                type: "object",
                properties: {
                  small: {
                    type: "string",
                  },
                  large: {
                    type: "string",
                  },
                },
              },
            },
            reddit: {
              type: "object",
              properties: {
                campaign: {
                  type: "string",
                },
                launch: {
                  type: "string",
                },
                media: {
                  type: "string",
                },
                recovery: {
                  type: "string",
                },
              },
            },
            flickr: {
              type: "object",
              properties: {
                small: {
                  type: "Array<string>",
                },
                original: {
                  type: "Array<string>",
                },
              },
            },
            presskit: {
              type: "string",
            },
            webcast: {
              type: "string",
            },
            youtube_id: {
              type: "string",
            },
            article: {
              type: "string",
            },
            wikipedia: {
              type: "string",
            },
          },
          static_fire_date_utc: {
            type: "string",
          },
          static_fire_date_unix: {
            type: "number",
          },
          tdb: {
            type: "boolean",
          },
          net: {
            type: "boolean",
          },
          window: {
            type: "number",
          },
          rocket: {
            type: "string",
          },
          success: {
            type: "boolean",
          },
          failures: {
            type: "Array<string>",
          },
          details: {
            type: "string",
          },
          crew: {
            type: "Array<{crew: string; role: string}>",
          },
          ships: {
            type: "Array<string>",
          },
          capsules: {
            type: "Array<string>",
          },
          payloads: {
            type: "Array<string>",
          },
          launchpad: {
            type: "string",
          },
          auto_update: {
            type: "boolean",
          },
          flight_number: {
            type: "number",
          },
          name: {
            type: "string",
          },
          date_utc: {
            type: "string",
          },
          date_unix: {
            type: "number",
          },
          date_local: {
            type: "string",
          },
          date_precision: {
            type: "string",
          },
          upcoming: {
            type: "boolean",
          },
          cores: {
            type: "Array<{core: string; flight: number; gridfinds: number; legs: boolean; reused: boolean; landing_attempt: boolean; landing_success: boolean; landing_type: string; landpad: string}>",
          },
          id: {
            type: "string",
          },
        },
      },
      Rocket: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          color: {
            type: "string",
          },
          launches: {
            type: "array",
            items: {
              type: "object",
              properties: {
                year: {
                  type: "string",
                },
                success: {
                  type: "boolean",
                },
                id: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
};
