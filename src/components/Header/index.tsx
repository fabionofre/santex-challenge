import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <img
        src="santex-logo-dark.svg"
        width={73}
        height={16}
        alt="logo"
      />
      <S.SubTotal>$ 100000</S.SubTotal>
    </S.Header >
  );
}
