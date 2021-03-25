const fauna = require("faunadb")
const {Query, Lambda, Now} = fauna




const raw = `{
    name: "a",
    role: null,
    body: Query(Lambda([], Now()))
  }`

const f = new Function(`

return ${raw}


`)

const s = JSON.stringify(f())

  console.log(s)