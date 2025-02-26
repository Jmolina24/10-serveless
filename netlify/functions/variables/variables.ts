import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {

const myImporntarVatiable = process.env.MY_IMPORTANT_VARIABLE;


if ( !myImporntarVatiable ) {
    throw 'Missing MY_IMPORTANT_VARIABLE';
}


  return {
    body: JSON.stringify({ message: "Variables World!! " }),
    statusCode: 200,
  }
}
