import React, { ChangeEvent, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Language } from '../../Language';
import {IoLanguage} from  "react-icons/io5";
import { Box, Tooltip } from "@mui/material";

const Lang = () => {
    const { i18n,t } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);

    let changeLanguage = () => {
        let language = lang===Language.EN?Language.FR:Language.EN;
        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    }
 
    return (
        <Tooltip
          title={t('common.translated-translate')??""}
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
            onClick={changeLanguage}
          >
            <IoLanguage />
          </Box>
        </Tooltip>

    )
}
 
export default Lang;