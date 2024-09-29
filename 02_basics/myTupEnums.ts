// const user: (string | number)[] = [1, "kb"]
let user: [string, number, boolean]

// user = ["kb", true, 22] -> wrong cus structure is not right
user = ["kb", 12, true]


type User = [number, string]

const newUser: User = [122, "exam@m.com"]

newUser[1] = "ab.com"



export {}