import { Container, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const BackTypography = styled(Typography)`
  @keyframes moveUpDown {
    0%,
    100% {
      transform: translateY(0); // Initial and final position (no movement)
    }
    50% {
      transform: translateY(-5px); // Move up 5px at halfway point
    }
  }

  animation: moveUpDown 2s ease-in-out infinite; // Animation properties
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth={"lg"}>
      <Grid2
        container
        size={{ xs: 12 }}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Grid2>
          <img src="/icons/notFound.svg" alt="Not Found!!!" width={"100%"} />
        </Grid2>
        <Grid2 sx={{ color: "tomato", fontWeight: 800, fontSize: 18 }}>
          صفحه مورد نظر پیدا نشد :/
        </Grid2>
        <Grid2
          sx={{ color: "#1e1e1e", fontWeight: 800, fontSize: 18, marginTop: 5 }}
        >
          <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
            <BackTypography sx={{ fontSize: 16 }} component={"p"} variant="p">
              بازگشت به صفحه قبل
            </BackTypography>
          </div>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default NotFoundPage;
