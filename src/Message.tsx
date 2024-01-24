
//PascalCasing has to do with camel case of name variables and functions
function Message() 
{
    //JSX: Javascript XML
    const name = 'Mikolo_the_newborn';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello world</h1>;
}

export default Message;