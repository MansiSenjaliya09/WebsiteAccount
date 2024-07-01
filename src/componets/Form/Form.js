import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Box, Typography, Container } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const budgetOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "First Name is required";
    tempErrors.lastName = formData.lastName ? "" : "Last Name is required";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? "" : "Email is not valid";
    tempErrors.phone = formData.phone.length > 9 ? "" : "Phone number is not valid";
    tempErrors.budget = formData.budget ? "" : "Budget is required";
    tempErrors.description = formData.description ? "" : "Description is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await fetch('https://66822c1204acc3545a0879d8.mockapi.io/formuser/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success('Form submitted successfully');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            budget: '',
            description: '',
          });
        } else {
          toast.error('Error submitting form');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Network error');
      }
    } else {
      toast.error('Please correct the errors in the form');
    }
  };

  return (
    <Container component="main" maxWidth="sm" id='contact-us'>
      <ToastContainer />
      <Box
        component="form"
        noValidate
        sx={{
          mt: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="body2" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              variant="standard"
              value={formData.firstName}
              onChange={handleChange}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              variant="standard"
              value={formData.lastName}
              onChange={handleChange}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              variant="standard"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              variant="standard"
              value={formData.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              required
              fullWidth
              id="budget"
              label="Budget"
              name="budget"
              variant="standard"
              value={formData.budget}
              onChange={handleChange}
              error={Boolean(errors.budget)}
              helperText={errors.budget}
            >
              {budgetOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              multiline
              variant="standard"
              value={formData.description}
              onChange={handleChange}
              error={Boolean(errors.description)}
              helperText={errors.description}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ backgroundColor: 'orange', height: '50px', width: '300px', borderRadius: '16px' }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
