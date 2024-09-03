import React from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { CheckIcon, ChevronDown, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import TabContainer from "./_components/tab-container";
import HeadContent from "./_components/head-content";
import TitleContent from "./_components/title-content";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "../ui/alert-dialog";
import {
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
const LanguageAndRegionTab = () => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [value, setValue] = React.useState("");
  const langs = [
    {
      value: "english",
      label: "English (US)",
      origin: "English",
      // onClick: () => setTheme("system"),
    },
    {
      value: "korean",
      label: "Korean",
      origin: "한국어",
      // onClick: () => setTheme("light"),
    },
    {
      value: "japanese",
      label: "Japanese",
      origin: "日本語",
      // onClick: () => setTheme("system"),
    },
    {
      value: "french",
      label: "French",
      origin: "Français (France)",
      // onClick: () => setTheme("light"),
    },
    {
      value: "german",
      label: "German",
      origin: "Deutsch",
      // onClick: () => setTheme("light"),
    },
  ];

  const [confirmValue, setConfirmValue] = React.useState(langs[0].origin);
  return (
    <TabContainer>
      <div>
        <HeadContent label="Language & region" />
        <div className="flex flex-col gap-4">
          <TitleContent
            title="Language"
            subtitle="Change the language used in the user interface."
          >
            <DropdownMenu open={open}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size={"lg"}
                  className="px-2 text-sm font-normal h-7 "
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  {/* {value
                    ? langs.find((lang) => lang.origin === value)?.origin
                    : "English"} */}
                  {confirmValue}
                  <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[280px] p-0" align="end">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {langs.map((lang) => (
                        <div key={lang.origin} onClick={() => {}}>
                          <CommandItem
                            value={lang.origin}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                              currentValue === value ? "" : setOpenAlert(true);
                            }}
                            className="cursor-pointer"
                          >
                            <div className="px-1">
                              <p>{lang.origin}</p>
                              <p className="text-muted-foreground text-xs">
                                {lang.label}
                              </p>
                            </div>
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                value === lang.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        </div>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialog open={openAlert}>
              <AlertDialogContent className="w-[300px] p-6">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center">
                    Are you sure you want to update the language to {value}?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <div className="space-y-2 flex flex-col">
                  <Button
                    onClick={() => {
                      setConfirmValue(value);
                      setOpenAlert(false);
                    }}
                    variant={"outline"}
                    size={"sm"}
                    className="border-red-300 text-red-500 hover:text-red-500 hover:bg-red-400/20 bg-red-400/10"
                  >
                    Update
                  </Button>

                  <Button
                    onClick={() => {
                      setOpenAlert(false);
                    }}
                    variant={"outline"}
                    size={"sm"}
                  >
                    Cancel
                  </Button>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          </TitleContent>

          <hr />
          <TitleContent
            title="Start week on Monday"
            subtitle="This will change how all calendars in your app look."
          >
            <Switch />
          </TitleContent>
        </div>
      </div>
    </TabContainer>
  );
};

export default LanguageAndRegionTab;
