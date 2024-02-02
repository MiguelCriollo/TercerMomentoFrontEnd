import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack,
    Image,
} from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView backgroundColor={"#350A24"}
    >
      <MyStack backgroundColor={"#350A24"}>
        <YStack
          space="$4"
          maxWidth={600}
        >
          <H1 textAlign="center">Movie Making</H1>
        </YStack>
        <YStack justifyContent={"center"}>

        </YStack>
        <YStack space="$2.5" alignItems={"center"}>
          <Button width={"50%"} backgroundColor={"#752D59"} onPress={() => router.push("/tabs")}>
            Begin
          </Button>
        </YStack>

        <YStack space="$5">
          <YGroup
            bordered
            separator={<Separator />}
            theme="green"
          >
            <YGroup.Item>
              <Link
                asChild
                href="https://github.com/MiguelCriollo/TercerMomentoFrontEnd"
                target="_blank"
              >
                <ListItem
                  hoverTheme
                  title="Miguel Criollo"
                  pressTheme
                  icon={Github}
                />
              </Link>
            </YGroup.Item>
          </YGroup>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
