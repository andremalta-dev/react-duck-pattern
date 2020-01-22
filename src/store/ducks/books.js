export const Types = {
    ADD: 'books/ADD',
    REMOVE: 'books/REMOVE',
}

const INITAIL_STATE = [{
    id: Math.random(),
    name: "React Redux Book - Example With Duck Pattern",
    author: "André Malta",
    abstract: "Using react redux to handle data in global context."
},
{
    id: Math.random(),
    name: "ATOMIC Design System",
    author: "André Malta",
    abstract: "Constructing design system with ATOMIC. Think about it."
}
]

export default function books(state = INITAIL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return [...state, { id: Math.random(), ...action.payload }]
        case Types.REMOVE:
            return state.filter(book => book.id !== action.payload.id)
        default:
            return state
    }
}

export const Creators = {
    addBook: ({ name, author, abstract }) => ({
        type: Types.ADD,
        payload: {
            name,
            author,
            abstract,
        },
    }),

    removeBook: id => ({
        type: Types.REMOVE,
        payload: {
            id,
        },
    }),
}
