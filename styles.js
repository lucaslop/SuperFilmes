import styled from "styled-components/native";
import { ImageBackground, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: flex-start;
  background-color: #000;
`;

export const AreaInput = styled.View`
  background: #fff;
  border-radius: 2px;
  margin: 70px auto;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  padding: 15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "grey"
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 31px;
  font-weight: bold;
  margin: 0 auto;
`;

export const AreaSlide = styled.View`
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
`;

export const Slide = styled.View`
  flex: 1;
  overflow: visible;
`;

export const Card = styled(TouchableOpacity)``;

export const ImageCard = styled(Image)`
  align-self: center;
  width: 200px;
  height: 300px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.5);
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin: 0 auto;
`;

export const InfoArea = styled.View`
  background: #fff;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
`;

export const InfoTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 15px auto;
`;

export const InfoDesc = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: grey;
  margin-left: 10px;
  margin-top: 20px;
`;
