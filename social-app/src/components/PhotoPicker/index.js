import React from "react";
import { Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { Container, IconContainer, ProfilePhoto } from "./styles";

const PhotoPicker = ({ profilePhoto, setProfilePhoto }) => {
  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      return status;
    }
  };

  const handlePíckImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setProfilePhoto(result.u);
      }
    } catch (error) {
      console.log("error");
    }
  };

  const handleAddProfilePhoto = async () => {
    const status = await getPermission();

    if (status !== "granted") {
      alert("É necessário permissão para acessar sua galeria.");
      return;
    }

    handlePíckImage();
  };

  return (
    <Container onPress={handleAddProfilePhoto}>
      {profilePhoto ? (
        <ProfilePhoto source={{ uri: profilePhoto }} />
      ) : (
        <IconContainer>
          <AntDesign name="plus" size={24} color="#fff" />
        </IconContainer>
      )}
    </Container>
  );
};

export default PhotoPicker;
