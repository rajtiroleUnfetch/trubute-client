import { Box, Typography } from "@mui/material";
import AboutSectionCard from "./AboutSectionCard";
import MemorialCarousel from "./MemorialCarousel";

const AboutTab = ({ memorial }: any) => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ color: "#0b2c52", mb: 3, textAlign: "center" }}
      >
        Honoring the Life of {memorial?.firstName}{" "}
        {memorial?.middleName || ""} {memorial?.lastName}
      </Typography>

      {/* CAROUSEL */}
      <MemorialCarousel>
        {/* PERSONAL DETAILS */}
        <AboutSectionCard title="Personal Details" bg="#f7f9fc">
          <Typography>
            <strong>Full Name:</strong> {memorial?.firstName}{" "}
            {memorial?.middleName || ""} {memorial?.lastName}
          </Typography>

          <Typography>
            <strong>Relationship:</strong>{" "}
            {memorial?.relationshipOther || memorial?.relationship}
          </Typography>

          <Typography>
            <strong>Role / Designation:</strong>{" "}
            {memorial?.designationOther || memorial?.designation}
          </Typography>

          {memorial?.specialDesignation && (
            <Typography>
              <strong>Special Honor:</strong> {memorial?.specialDesignation}
            </Typography>
          )}
        </AboutSectionCard>

        {/* BIRTH INFO */}
        <AboutSectionCard title="Birth Information" bg="#fff2f2">
          <Typography>
            <strong>Date of Birth:</strong> {memorial?.bornDay}-
            {memorial?.bornMonth}-{memorial?.bornYear}
          </Typography>

          <Typography>
            <strong>Birthplace:</strong> {memorial?.bornCity},{" "}
            {memorial?.bornState}, {memorial?.bornCountry}
          </Typography>
        </AboutSectionCard>

        {/* PASSING INFO */}
        <AboutSectionCard title="In Loving Memory" bg="#edf3ff">
          <Typography>
            <strong>Date of Passing:</strong> {memorial?.passedDay}-
            {memorial?.passedMonth}-{memorial?.passedYear}
          </Typography>

          <Typography>
            <strong>Place:</strong> {memorial?.passedCity},{" "}
            {memorial?.passedState}, {memorial?.passedCountry}
          </Typography>
        </AboutSectionCard>

        {/* LEGACY */}
        <AboutSectionCard title="Legacy" bg="#fff8e8">
          <Typography sx={{ lineHeight: 1.7 }}>
            {memorial?.moreDetails ||
              "Their light continues to shine through those they touched."}
          </Typography>
        </AboutSectionCard>

        {/* WEBSITE + PLAN */}
        <AboutSectionCard title="Memorial Information" bg="#f4fafb">
          <Typography>
            <strong>Memorial Page:</strong> {memorial?.website}
          </Typography>

          <Typography>
            <strong>Plan:</strong> {memorial?.plan}
          </Typography>

          <Typography>
            <strong>Privacy:</strong>{" "}
            {memorial?.privacy === "public"
              ? "Public – Anyone can view"
              : "Private – Only invited viewers"}
          </Typography>
        </AboutSectionCard>
      </MemorialCarousel>
    </Box>
  );
};

export default AboutTab;
