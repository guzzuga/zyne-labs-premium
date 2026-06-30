export const colorMap: Record<string, string> = {
  kw: "#C586C0",
  str: "#CE9178",
  func: "#DCDCAA",
  var: "#9CDCFE",
  num: "#B5CEA8",
  cm: "#6A9955",
  op: "#D4D4D4",
};

export interface Token { text: string; cls: string }
export interface SnippetLine { tokens: Token[]; fullText: string }
export interface Snippet { lang: string; lines: SnippetLine[] }

function mk(tokens: Token[]): SnippetLine {
  const fullText = tokens.map(t => t.text).join("");
  return { tokens, fullText };
}

export const snippets: Snippet[] = [
  {
    lang: "python",
    lines: [
      mk([{text:"from ",cls:"kw"},{text:"zyne",cls:"var"},{text:" import ",cls:"kw"},{text:"Agent",cls:"func"},{text:", ",cls:"op"},{text:"Pipeline",cls:"func"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"# Initialize AI agent",cls:"cm"}]),
      mk([{text:"agent",cls:"var"},{text:" = ",cls:"op"},{text:"Agent",cls:"func"},{text:"(model=",cls:"op"},{text:'"zyne-3.5"',cls:"str"},{text:")",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"pipeline",cls:"var"},{text:" = ",cls:"op"},{text:"Pipeline",cls:"func"},{text:"([",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"agent",cls:"var"},{text:".",cls:"op"},{text:"chat",cls:"func"},{text:"(prompt=",cls:"op"},{text:'"Build UI"',cls:"str"},{text:")",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"agent",cls:"var"},{text:".",cls:"op"},{text:"deploy",cls:"func"},{text:"(target=",cls:"op"},{text:'"vercel"',cls:"str"},{text:")",cls:"op"}]),
      mk([{text:"])",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"result",cls:"var"},{text:" = ",cls:"op"},{text:"pipeline",cls:"var"},{text:".",cls:"op"},{text:"run",cls:"func"},{text:"()",cls:"op"}]),
      mk([{text:"print",cls:"func"},{text:"(result)",cls:"var"}]),
    ],
  },
  {
    lang: "typescript",
    lines: [
      mk([{text:"import",cls:"kw"},{text:" { ",cls:"op"},{text:"createApp",cls:"func"},{text:" } ",cls:"kw"},{text:"from",cls:"kw"},{text:" ",cls:"op"},{text:"'zyne'",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"import",cls:"kw"},{text:" { ",cls:"op"},{text:"AIAgent",cls:"func"},{text:" } ",cls:"kw"},{text:"from",cls:"kw"},{text:" ",cls:"op"},{text:"'zyne/core'",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"const",cls:"kw"},{text:" app",cls:"var"},{text:" = ",cls:"op"},{text:"createApp",cls:"func"},{text:"({",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"name",cls:"var"},{text:": ",cls:"op"},{text:"'zyne-dashboard'",cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"ai",cls:"var"},{text:": { ",cls:"op"},{text:"enabled",cls:"var"},{text:": ",cls:"op"},{text:"true",cls:"kw"},{text:" }",cls:"op"},{text:",",cls:"op"}]),
      mk([{text:"})",cls:"op"},{text:";",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"const",cls:"kw"},{text:" agent",cls:"var"},{text:" = ",cls:"op"},{text:"new",cls:"kw"},{text:" ",cls:"op"},{text:"AIAgent",cls:"func"},{text:"({",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"model",cls:"var"},{text:": ",cls:"op"},{text:"'zyne-3.5'",cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"maxTokens",cls:"var"},{text:": ",cls:"op"},{text:"4096",cls:"num"},{text:",",cls:"op"}]),
      mk([{text:"})",cls:"op"},{text:";",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"await",cls:"kw"},{text:" ",cls:"op"},{text:"agent",cls:"var"},{text:".",cls:"op"},{text:"deploy",cls:"func"},{text:"()",cls:"op"},{text:";",cls:"op"}]),
      mk([{text:"console",cls:"var"},{text:".",cls:"op"},{text:"log",cls:"func"},{text:"(",cls:"op"},{text:"'App live'",cls:"str"},{text:");",cls:"op"}]),
    ],
  },
  {
    lang: "javascript",
    lines: [
      mk([{text:"const",cls:"kw"},{text:" { ",cls:"op"},{text:"Agent",cls:"func"},{text:", ",cls:"op"},{text:"Pipeline",cls:"func"},{text:" } ",cls:"op"},{text:"= ",cls:"op"},{text:"require",cls:"func"},{text:"(",cls:"op"},{text:"'zyne'",cls:"str"},{text:");",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"// Create workflow",cls:"cm"}]),
      mk([{text:"const",cls:"kw"},{text:" workflow",cls:"var"},{text:" = ",cls:"op"},{text:"new",cls:"kw"},{text:" ",cls:"op"},{text:"Pipeline",cls:"func"},{text:"([",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"async",cls:"kw"},{text:" (ctx) => {",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"const",cls:"kw"},{text:" data",cls:"var"},{text:" = ",cls:"op"},{text:"await",cls:"kw"},{text:" ctx",cls:"var"},{text:".",cls:"op"},{text:"fetch",cls:"func"},{text:"(",cls:"op"},{text:"'/api'",cls:"str"},{text:");",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"},",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"async",cls:"kw"},{text:" (ctx) => {",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"const",cls:"kw"},{text:" result",cls:"var"},{text:" = ",cls:"op"},{text:"await",cls:"kw"},{text:" ctx",cls:"var"},{text:".",cls:"op"},{text:"ai",cls:"var"},{text:".",cls:"op"},{text:"generate",cls:"func"},{text:"(",cls:"op"},{text:'"Analyze"',cls:"str"},{text:");",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"return",cls:"kw"},{text:" result",cls:"var"},{text:";",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"}",cls:"op"}]),
      mk([{text:"]);",cls:"op"}]),
    ],
  },
];