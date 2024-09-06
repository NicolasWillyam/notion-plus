import React from "react";
import HeadContent from "./head-content";
import TitleContent from "./title-content";
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

// const frameworks = [
//   {
//     value: "use-user-setting",
//     label: "Use user setting",
//     onClick: () => setTheme("system"),
//   },
//   {
//     value: "light",
//     label: "Light",
//     onClick: () => setTheme("light"),
//   },
//   {
//     value: "dark",
//     label: "Dark",
//     onClick: () => setTheme("dark"),
//   },
// ];

const MySettings = () => {
  const { setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const frameworks = [
    {
      value: "use-user-setting",
      label: "Use user setting",
      onClick: () => setTheme("system"),
    },
    {
      value: "light",
      label: "Light",
      onClick: () => setTheme("light"),
    },
    {
      value: "dark",
      label: "Dark",
      onClick: () => setTheme("dark"),
    },
  ];
  return (
    <div>
      <HeadContent label="My settings" />
      <div className="flex flex-col gap-4">
        <TitleContent
          title="Appearance"
          subtitle="Customize how Notion looks on your device."
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size={"lg"}
                className="px-2 text-sm font-normal h-7"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "User system setting"}
                <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[240px] p-0" align="end">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <div key={framework.value} onClick={framework.onClick}>
                        <CommandItem
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                          className="cursor-pointer"
                        >
                          {framework.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === framework.value
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
        </TitleContent>

        <TitleContent
          title="Open links in desktop app"
          subtitle="You must have the macOS app installed."
        >
          <Switch />
        </TitleContent>

        <TitleContent
          title=""
          subtitle="If installed, macOS will open links to Notion in the desktop app, even if this setting is turned off. To disable that behavior, enable 'Open Notion links in browser' in your app."
        >
          <Button variant={"outline"} size={"md"}>
            Set in app
          </Button>
        </TitleContent>
      </div>
    </div>
  );
};

export default MySettings;
