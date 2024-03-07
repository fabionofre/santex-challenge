import * as S from './styles';

export function Product() {
    return (
        <S.Card>
            <S.CardHeader>
                <img src='https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg' />
            </S.CardHeader>
            <S.CardBody>
                <S.ProducDescription>
                    Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.
                </S.ProducDescription>
            </S.CardBody>
            <S.CardFooter>
                <S.BuyButton>Buy</S.BuyButton>
            </S.CardFooter>
        </S.Card>
    );
}
