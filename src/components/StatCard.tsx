import { Card, CardContent, Typography, Box } from "@mui/material";

interface Props {
  title: string;
  value: string;
  color: string;
}

export default function StatCard({ title, value, color }: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Box
          width={40}
          height={40}
          borderRadius="50%"
          bgcolor={color}
          mb={1}
        />
        <Typography variant="h6">{value}</Typography>
        <Typography color="text.secondary">{title}</Typography>
      </CardContent>
    </Card>
  );
}
