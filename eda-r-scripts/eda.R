library(tidyverse)

cr::set_cr_theme()

data <- read.csv("../data/data.csv")
data <- janitor::clean_names(data)

data <- data %>% 
  mutate(total_dead_and_missing = as.numeric(total_dead_and_missing))

data %>% 
  group_by(unsd_geographical_grouping) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>% 
  mutate(unsd_geographical_grouping = reorder(unsd_geographical_grouping, dead_and_missing)) %>% 
  slice(1:10) %>% 
  ggplot(aes(x=unsd_geographical_grouping,y=dead_and_missing)) +
  geom_col() +
  coord_flip() +
  labs(title = "Where do migrants go missing?",
       y = "Number dead or missing",
       x = element_blank()) +
  cr::fix_bars()

data %>% 
  group_by(migration_route) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>% 
  mutate(migration_route = reorder(migration_route, dead_and_missing)) %>% 
  slice(1:10) %>% 
  ggplot(aes(x=migration_route,y=dead_and_missing)) +
  geom_col() +
  coord_flip() +
  labs(title = "Where do migrants go missing?",
       y = "Number dead or missing",
       x = element_blank()) +
  cr::fix_bars()
