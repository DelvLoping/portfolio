import React from "react";
import { Box, Link, Paper, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { VscFiles } from "react-icons/vsc";
import { BiGitBranch } from "react-icons/bi";
import Divider from "@mui/material/Divider";
import { links } from "../pages/links";
import { useTranslation } from "react-i18next"
import Lang from "../components/Lang";


interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Sidebar({
  expanded,
  setExpanded,
  darkMode,
  handleThemeChange,
}: Props) {
  const { t } = useTranslation();
  const getTheMailto = (link:string):void => {
    window.open(link);
  }
  return (
    <Box
      sx={{
        height: `calc(100vh - 20px)`,
        backgroundColor: darkMode ? "#333333" : "#2c2c2c",
      }}
      justifyContent="space-between"
      display="flex"
      flexDirection="column"
      component={Paper}
      square
      elevation={0}
    >
      <Box
        sx={{ flexGrow: 0 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          sx={{
            borderLeft: expanded
              ? "solid 0.12em white"
              : darkMode
              ? "solid 0.12em #333333"
              : "solid 0.12em #2c2c2c",
            cursor: "pointer",
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Box
            sx={{
              flexGrow: 0,
              my: 1.5,
              color: expanded ? "white" : "#858585",
              fontSize: 24,
              outline: "none",
              "&:hover": {
                color: "white",
              },
            }}
            display="flex"
            justifyContent="center"
          >
            <VscFiles />
          </Box>
        </Box>
        <Tooltip title="Source of this project" arrow placement="right">
          <Link
            target="_blank"
            href={"https://github.com/noworneverev/react-vscode-portfolio"}
            underline="none"
            color="inherit"
            sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
          >
            <Box
              sx={{
                flexGrow: 0,
                cursor: "pointer",
                color: "#858585",
                fontSize: 24,
                "&:hover": {
                  color: "white",
                },
              }}
              display="flex"
              justifyContent="center"
            >
              <Box mt={0.7}>
                <BiGitBranch />
              </Box>
            </Box>
          </Link>
        </Tooltip>

        <Divider sx={{ m: 0.5 }} />

        {links.map((link) => (
          <Tooltip title={t(link.title)??""} arrow placement="right" key={link.index}>
            {link.href.startsWith("mailto") ?
                    <Link
                    target="_blank"
                    href="#"
                    underline="none"
                    color="inherit"
                    sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
                    onClick={() => getTheMailto(link.href)}
                  >
                    <Box
                      sx={{
                        flexGrow: 0,
                        m: 0.5,
                        color: "#858585",
                        fontSize: 24,
                        "&:hover": {
                          color: "white",
                        },
                        cursor: "pointer",
                      }}
                      display="flex"
                      justifyContent="center"
                    >
                      <Box mt={0.7}>{link.icon}</Box>
                    </Box>
                  </Link>
                    :
                    <Link
              target="_blank"
              href={link.href}
              underline="none"
              color="inherit"
              sx={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
            >
              <Box
                sx={{
                  flexGrow: 0,
                  m: 0.5,
                  color: "#858585",
                  fontSize: 24,
                  "&:hover": {
                    color: "white",
                  },
                  cursor: "pointer",
                }}
                display="flex"
                justifyContent="center"
              >
                <Box mt={0.7}>{link.icon}</Box>
              </Box>
            </Link>
                    }
          </Tooltip>
        ))}
      </Box>

      <Box
        sx={{ flexGrow: 0, pb: 0.5 }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Tooltip
          title={darkMode ? t('common.translated-darkmodeOn')??"" : t('common.translated-darkmodeOff')??""}
          placement="right"
          arrow
        >
          <Box
            sx={{
              flexGrow: 0,
              fontSize: 24,
              color: "#858585",
              cursor: "pointer",
              "&:hover": {
                color: "white",
              },
              WebkitTapHighlightColor: "rgba(0,0,0,0)",
            }}
            display="flex"
            justifyContent="center"
            onClick={handleThemeChange}
          >
            {!darkMode ? (
              <Box>
                <DarkModeOutlinedIcon />
              </Box>
            ) : (
              <Box>
                <LightModeOutlinedIcon />
              </Box>
            )}
          </Box>
        </Tooltip>
        <Box
          sx={{
            flexGrow: 0,
            fontSize: 24,
            color: "#858585",
            cursor: "pointer",
            "&:hover": {
              color: "white",
            },
            WebkitTapHighlightColor: "rgba(0,0,0,0)",
          }}
          display="flex"
          justifyContent="center"
        >
          <Box mt={0.7}>
          <Lang />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
