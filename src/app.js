import figlet from 'figlet';

const urText = "HELLO TEA FROM FXTHUR"

const app = () => {
    console.log(figlet.textSync(urText, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));
}

export default app;
