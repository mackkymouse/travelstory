import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
   const formData = new FormData();
   // Append image file to form data
   formData.append("image", imageFile);

   try {
      const response = await axiosInstance.post("/image-upload", formData, {
         headers: {
            "Content-Type": "multipart/form-data", // Set header for file upload
         },
      });
      return response.data;
   } catch (error) {
      console.log("Error uploading the image", error);
      throw error; // Rethrow erorr for handling
   }
};

export default uploadImage;
