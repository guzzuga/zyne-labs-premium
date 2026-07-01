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
      mk([{text:"from ",cls:"kw"},{text:"zyne.models",cls:"var"},{text:" import ",cls:"kw"},{text:"ChatModel",cls:"func"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"# Initialize Zyne agent",cls:"cm"}]),
      mk([{text:"agent",cls:"var"},{text:" = ",cls:"op"},{text:"Agent",cls:"func"},{text:"(",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"model",cls:"var"},{text:"=",cls:"op"},{text:'"zyne-3.5"',cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"temperature",cls:"var"},{text:"=",cls:"op"},{text:"0.7",cls:"num"},{text:",",cls:"op"}]),
      mk([{text:"))",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"pipeline",cls:"var"},{text:" = ",cls:"op"},{text:"Pipeline",cls:"func"},{text:"([",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"agent",cls:"var"},{text:".",cls:"op"},{text:"chat",cls:"func"},{text:'("Build UI")',cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"agent",cls:"var"},{text:".",cls:"op"},{text:"review",cls:"func"},{text:'("Check code")',cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"agent",cls:"var"},{text:".",cls:"op"},{text:"deploy",cls:"func"},{text:'("vercel")',cls:"str"},{text:"",cls:"op"}]),
      mk([{text:"])",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"result",cls:"var"},{text:" = ",cls:"op"},{text:"pipeline",cls:"var"},{text:".",cls:"op"},{text:"run",cls:"func"},{text:"()",cls:"op"}]),
      mk([{text:"print",cls:"func"},{text:"(f",cls:"op"},{text:'"Done: {result.status}"',cls:"str"},{text:")",cls:"op"}]),
    ],
  },
  {
    lang: "typescript",
    lines: [
      mk([{text:"import",cls:"kw"},{text:" { ",cls:"op"},{text:"createApp",cls:"func"},{text:" } ",cls:"kw"},{text:"from",cls:"kw"},{text:" ",cls:"op"},{text:"'zyne'",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"import",cls:"kw"},{text:" { ",cls:"op"},{text:"AIAgent",cls:"func"},{text:" } ",cls:"kw"},{text:"from",cls:"kw"},{text:" ",cls:"op"},{text:"'zyne/core'",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"import",cls:"kw"},{text:" { ",cls:"op"},{text:"VercelTarget",cls:"func"},{text:" } ",cls:"kw"},{text:"from",cls:"kw"},{text:" ",cls:"op"},{text:"'zyne/deploy'",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"const",cls:"kw"},{text:" app",cls:"var"},{text:" = ",cls:"op"},{text:"createApp",cls:"func"},{text:"({",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"name",cls:"var"},{text:": ",cls:"op"},{text:"'zyne-dashboard'",cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"version",cls:"var"},{text:": ",cls:"op"},{text:"'1.0.0'",cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"ai",cls:"var"},{text:": {",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"enabled",cls:"var"},{text:": ",cls:"op"},{text:"true",cls:"kw"},{text:",",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"model",cls:"var"},{text:": ",cls:"op"},{text:"'zyne-3.5'",cls:"str"},{text:"",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"}",cls:"op"},{text:",",cls:"op"}]),
      mk([{text:"})",cls:"op"},{text:";",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"const",cls:"kw"},{text:" agent",cls:"var"},{text:" = ",cls:"op"},{text:"new",cls:"kw"},{text:" ",cls:"op"},{text:"AIAgent",cls:"func"},{text:"({",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"model",cls:"var"},{text:": ",cls:"op"},{text:"'zyne-3.5'",cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"maxTokens",cls:"var"},{text:": ",cls:"op"},{text:"4096",cls:"num"},{text:",",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"streaming",cls:"var"},{text:": ",cls:"op"},{text:"true",cls:"kw"},{text:"",cls:"op"}]),
      mk([{text:"})",cls:"op"},{text:";",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"await",cls:"kw"},{text:" agent",cls:"var"},{text:".",cls:"op"},{text:"deploy",cls:"func"},{text:"(new",cls:"kw"},{text:" VercelTarget())",cls:"func"},{text:";",cls:"op"}]),
      mk([{text:"console",cls:"var"},{text:".",cls:"op"},{text:"log",cls:"func"},{text:"(\"",cls:"op"},{text:"✓ App live",cls:"str"},{text:"\")",cls:"op"},{text:";",cls:"op"}]),
    ],
  },
  {
    lang: "javascript",
    lines: [
      mk([{text:"const",cls:"kw"},{text:" { ",cls:"op"},{text:"Agent",cls:"func"},{text:", ",cls:"op"},{text:"Pipeline",cls:"func"},{text:" } ",cls:"op"},{text:"= ",cls:"op"},{text:"require",cls:"func"},{text:"('zyne')",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"// Create async workflow",cls:"cm"}]),
      mk([{text:"const",cls:"kw"},{text:" workflow",cls:"var"},{text:" = ",cls:"op"},{text:"new",cls:"kw"},{text:" ",cls:"op"},{text:"Pipeline",cls:"func"},{text:"([",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"async",cls:"kw"},{text:" (ctx) => {",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"const",cls:"kw"},{text:" data",cls:"var"},{text:" = ",cls:"op"},{text:"await",cls:"kw"},{text:" ctx",cls:"var"},{text:".",cls:"op"},{text:"fetch",cls:"func"},{text:"('/api/clients')",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"ctx",cls:"var"},{text:".",cls:"op"},{text:"set",cls:"func"},{text:"('clients', data)",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"},",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"async",cls:"kw"},{text:" (ctx) => {",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"const",cls:"kw"},{text:" clients",cls:"var"},{text:" = ",cls:"op"},{text:"ctx",cls:"var"},{text:".",cls:"op"},{text:"get",cls:"func"},{text:"('clients')",cls:"str"},{text:";",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"const",cls:"kw"},{text:" result",cls:"var"},{text:" = ",cls:"op"},{text:"await",cls:"kw"},{text:" ctx",cls:"var"},{text:".",cls:"op"},{text:"ai",cls:"var"},{text:".",cls:"op"},{text:"generate",cls:"func"},{text:"(",cls:"op"}]),
      mk([{text:"      ",cls:"op"},{text:'"Analyze data"',cls:"str"},{text:",",cls:"op"}]),
      mk([{text:"      ",cls:"op"},{text:"clients",cls:"var"},{text:";",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:")",cls:"op"},{text:";",cls:"op"}]),
      mk([{text:"    ",cls:"op"},{text:"return",cls:"kw"},{text:" result",cls:"var"},{text:";",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"}",cls:"op"},{text:"",cls:"op"}]),
      mk([{text:"])",cls:"op"},{text:";",cls:"op"}]),
      mk([{text:"",cls:"op"}]),
      mk([{text:"workflow",cls:"var"},{text:".",cls:"op"},{text:"run",cls:"func"},{text:"()",cls:"op"},{text:".",cls:"op"},{text:"then",cls:"func"},{text:"((r) => {",cls:"op"}]),
      mk([{text:"  ",cls:"op"},{text:"console",cls:"var"},{text:".",cls:"op"},{text:"log",cls:"func"},{text:"(r)",cls:"var"},{text:";",cls:"op"}]),
      mk([{text:"})",cls:"op"},{text:";",cls:"op"}]),
    ],
  },
];