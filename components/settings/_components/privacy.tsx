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

const Privacy = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const cookiesSetting = [
    {
      value: "strictly-necessary",
      title: "Strictly necessary",
      subtitle: "Essential for the site to function. Always On.",
      onClick: () => {},
    },
    {
      value: "functional",
      title: "Functional",
      subtitle:
        "Used to remember preference selections and provide enhanced features.",
      onClick: () => {},
    },
    {
      value: "analytics",
      title: "Analytics",
      subtitle: "Used to measure usage and improve your experience.",
      onClick: () => {},
    },
    {
      value: "marketing",
      title: "Marketing",
      subtitle: "Used for targeted advertising.",
      onClick: () => {},
    },
  ];

  const frameworks = [
    {
      value: "record",
      label: "Record",
      // onClick: () => setTheme("system"),
    },
    {
      value: "dont-record",
      label: "Don't Record",
      // onClick: () => setTheme("light"),
    },
  ];
  return (
    <div>
      <HeadContent label="Privacy" />
      <div className="flex flex-col gap-4">
        <TitleContent
          title="Cookie settings"
          subtitle="Customize cookies. See docs for details."
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size={"lg"}
                className="px-2 text-sm font-normal h-7"
              >
                Customize
                <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-[280px] p-1 rounded-xl"
              align="center"
            >
              {cookiesSetting.map((cookie, id) => (
                <Button
                  className="w-full justify-between px-3 py-1.5 h-auto gap-2"
                  variant={"ghost"}
                  key={id}
                >
                  <div className="w-full cursor-pointer flex flex-col gap-1 text-left text-wrap">
                    <p>{cookie.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {cookie.subtitle}
                    </p>
                  </div>
                  {cookie.value === "strictly-necessary" ? (
                    <Switch checked={true} disabled aria-readonly />
                  ) : (
                    <Switch />
                  )}
                </Button>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </TitleContent>

        <TitleContent
          title="Show my view history"
          subtitle="People with edit or full access will be able to see when you’ve viewed a page. "
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size={"lg"}
                className="px-2 text-sm font-normal h-7"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Record"}
                <ChevronDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px] p-0" align="end">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <div key={framework.value} onClick={() => {}}>
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
            </PopoverContent>
          </Popover>
        </TitleContent>

        <TitleContent
          title="Profile discoverability"
          subtitle="Users with your email can see your name and profile picture when inviting you to a new workspace."
        >
          <Switch />
        </TitleContent>
      </div>
    </div>
  );
};

export default Privacy;
