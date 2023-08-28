import { useNavigate } from "react-router-dom";

import {
  Body,
  DirectoryItemContainer,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigateaHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateaHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
