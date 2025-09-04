const dataAtual= new Date();

document.write(`<p>O horário atual é: ${dataAtual}</p>`);

const compraInternacional = 500.75;
document.write(`<p>
    O valor da compra formatado no padrão americano é: ${compraInternacional.toLocaleString("en",{
        style:"currency",
        currency:"USD",
    })}
</p>`)

const compraNacional = compraInternacional * 5.45;
document.write(`<p>
    O valor da compra formatado no padrão brasileiro é: ${compraNacional.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL",
    })}
</p>`)

document.write(`A estimativa é de que a sua compra chegue daqui a 12 dias, ou seja, no dia: ${dataAtual.getDay()+12}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`);