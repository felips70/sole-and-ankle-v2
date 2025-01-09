import React from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";
import { isNewShoe } from "./ShoeCard.helpers";

const ShoeCard = ({ shoe }) => {
  const variant = shoe.salePrice
    ? "sale"
    : isNewShoe(shoe.releaseDate)
    ? "just-released"
    : "default";

  return (
    <Wrapper>
      {variant !== "default" && (
        <Flag variant={variant}>
          {variant === "sale" ? "Sale" : "Just Released!"}
        </Flag>
      )}
      <Image src={shoe.imageSrc} />
      <Info>
        <ShoeName>{shoe.name}</ShoeName>
        <Price variant={variant}>${shoe.price}</Price>
      </Info>
      <Info>
        <NumOfColors>
          {shoe.numOfColors}
          {shoe.numOfColors === 1 ? " Color" : " Colors"}
        </NumOfColors>
        {variant === "sale" && <SalePrice>{shoe.salePrice}</SalePrice>}
      </Info>
    </Wrapper>
  );
};

const Price = styled.p`
  color: ${(p) =>
    p.variant === "default" || p.variant === "just-released"
      ? COLORS.gray[900]
      : COLORS.gray[700]};
  text-decoration: ${(p) => (p.variant === "sale" ? "line-through" : "")};
`;

const SalePrice = styled.p`
  color: ${COLORS.primary};
`;

const Wrapper = styled.div`
  flex: 1 1 240px;
  max-width: 570px;
  position: relative;
`;

const Flag = styled.div`
  color: ${COLORS.white};
  background-color: ${(p) =>
    p.variant === "sale" ? COLORS.primary : COLORS.secondary};
  border-radius: 2px;
  padding: 8px 10px;
  position: absolute;
  top: 12px;
  right: -4px;
  font-weight: ${WEIGHTS.bold};
  font-size: 14px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShoeName = styled.p`
  font-weight: ${WEIGHTS.medium};
`;

const NumOfColors = styled.p`
  color: ${COLORS.gray[700]};
`;

export default ShoeCard;
