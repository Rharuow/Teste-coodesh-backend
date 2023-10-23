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
        responses: {
          "200": {
            description: "Fullstack Challenge 🏅 - Space X API",
          },
          "400": {
            description: "Sorry, something is worng at home router...",
          },
        },
      },
    },
    "/launches": {
      get: {
        summary: "List all launches",
        description:
          "Return all launches and accept query param router 'search' thats filter launches by name porperty. Futermore, 'limit' and 'page' can be pass at query param router to paginate the request. All the params are optionals",
        tags: ["Launch"],
        parameters: [
          {
            name: "search",
            in: "query",
            description: "Text to filter launches by name property",
            required: false,
          },
          {
            name: "results",
            in: "query",
            description: "Pass 'success' or 'fail' to filter by results",
            schema: {
              type: "string",
              enum: ["success", "fail"],
            },
            required: false,
          },
          {
            name: "limit",
            in: "query",
            description: "How much per page",
            schema: {
              type: "number",
            },
            default: 10,
            required: false,
          },
          {
            name: "page",
            in: "query",
            description: "Get specific page",
            schema: {
              type: "number",
            },
            default: 1,
            required: false,
          },
        ],
        responses: {
          "200": {
            description: "List launches paginated and filtrable",
          },
          "400": {
            description: "Sorry, something is worng at home router...",
          },
        },
      },
    },
    "/stats/pie": {
      get: {
        summary: "GET data to pie chart",
        description: "Provide data to be feed a pie chart in the frontend.",
        tags: ["Stats"],
        responses: {
          "200": {
            description: "Data to feed a pie chart",
          },
          "400": {
            description:
              "Sorry, there was an error generating the rocket pizza statistics",
          },
        },
      },
    },
    "/stats/bar": {
      get: {
        summary: "GET data to bar chart",
        description: "Provide data to be feed a bar chart in the frontend.",
        tags: ["Stats"],
        responses: {
          "200": {
            description: "Data to feed a bar chart",
          },
          "400": {
            description:
              "Sorry, there was an error generating the rocket bar stats",
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
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  original: {
                    type: "array",
                    items: {
                      type: "string",
                    },
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
            type: "array",
            items: {
              type: "string",
            },
          },
          details: {
            type: "string",
          },
          crew: {
            type: "array",
            items: {
              type: "object",
              properties: {
                crew: {
                  type: "string",
                },
                role: {
                  type: "string",
                },
              },
            },
          },
          ships: {
            type: "array",
            items: {
              type: "string",
            },
          },
          capsules: {
            type: "array",
            items: {
              type: "string",
            },
          },
          payloads: {
            type: "array",
            items: {
              type: "string",
            },
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
            type: "array",
            items: {
              type: "object",
              properties: {
                core: {
                  type: "string",
                },
                fligth: { type: "number" },
                gridfinds: { type: "number" },
                legs: { type: "boolean" },
                reused: { type: "boolean" },
                landing_attempt: { type: "boolean" },
                landing_success: { type: "boolean" },
                landing_type: { type: "string" },
                landpad: { type: "string" },
              },
            },
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
