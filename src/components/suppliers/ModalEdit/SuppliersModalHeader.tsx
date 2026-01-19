import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Divider
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { colors } from "@mui/material";

interface SupplierModalHeaderProps {
  name: string;
  role: string;
  initials: string;
  onDownload?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function SupplierModalHeader({
  name,
  role,
  initials,
  onDownload,
  onEdit,
  onDelete
}: SupplierModalHeaderProps) {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        {/* Avatar + Info */}
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar sx={{ width: 56, height: 56 }}>
            {initials}
          </Avatar>

          <Box>
            <Typography fontWeight={600}>
              {name}
            </Typography>
            <Typography variant="body2" color="#94a3b8">
              {role}
            </Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box>
          <IconButton sx={{ color: "#7f7f7f" }} onClick={onDownload}>
            <DownloadIcon />
          </IconButton>
          <IconButton sx={{ color: "#317dda" }} onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton sx={{ color: "#ef4444" }} onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ borderColor: colors.grey[300] }} />
    </>
  );
}
