import { Container, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
            <Typography sx={{ fontSize: 16 }} component={"p"} variant="p">
              بازگشت به صفحه قبل
            </Typography>
          </div>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default NotFoundPage;
