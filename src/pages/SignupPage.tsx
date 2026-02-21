import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../api/axiosInstance";

const schema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10).max(10),
  password: z.string().min(6),
});

type SignupForm = z.infer<typeof schema>;

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // 🔥 This runs when user clicks button
  const handleSignup = async (data: SignupForm) => {
    const phone = data.phone;

    const configuration = {
      widgetId: "36626a6a6874323236383530",
      tokenAuth: "493108TIiR4hJlNt698b3038P1",
      identifier: `91${phone}`,

      success: async function (widgetData: any) {
        try {
          setLoading(true);
          console.log(widgetData,'widgetData');
          

          // 🔥 Immediately call backend after OTP success
          const res = await axiosInstance.post("/auth/signup", {
            name: data.fullName,
            email: data.email,
            phone: data.phone,
            password: data.password,
            accessToken: widgetData.token,
          });

          toast.success("Signup successful ✅");
          navigate("/"); // 🔥 redirect directly
        } catch (err: any) {
          toast.error(
            err?.response?.data?.message || "Signup failed"
          );
        } finally {
          setLoading(false);
        }
      },

      failure: function (err: any) {
        toast.error("OTP verification failed ❌");
      },
    };

    if ((window as any).initSendOTP) {
      (window as any).initSendOTP(configuration);
    } else {
      toast.error("OTP service not loaded");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card sx={{ maxWidth: 420, width: "100%" }}>
        <CardContent>
          <Typography variant="h5" align="center">
            Create Account
          </Typography>

          <form onSubmit={handleSubmit(handleSignup)}>
            <TextField
              label="Full Name"
              fullWidth
              sx={{ mt: 2 }}
              {...register("fullName")}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />

            <TextField
              label="Email"
              fullWidth
              sx={{ mt: 2 }}
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Phone"
              fullWidth
              sx={{ mt: 2 }}
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              sx={{ mt: 2 }}
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={20} />
              ) : (
                "Send OTP & Sign Up"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
