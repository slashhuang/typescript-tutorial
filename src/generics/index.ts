// flexible capabilities
// reusable
// https://www.typescriptlang.org/docs/handbook/generics.html
interface ITBoy<T> { 
    skills: T
}
const Teacher: ITBoy<[string, string, string]>  = {
    skills: ['js', 'ts', 'css']
};
const Student1: ITBoy<[string]> = {
    skills: ['css'],
}
const Student2: ITBoy<undefined> = {
    skills: undefined,
}
const Student3: ITBoy<string> = {
    skills: 'js',
}