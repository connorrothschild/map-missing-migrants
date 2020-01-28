library(tidyverse)
library(ggplot2)
library(dplyr)
library(viridis)
library(lubridate)
library(Interpol.T)
library(tidyr)

cr::set_cr_theme(font = "lato")

data <- read.csv("../data/data.csv")
data <- janitor::clean_names(data)

library(showtext)
font.add("Inter", "Inter-Medium.otf")
showtext_auto()

sum(data$total_dead_and_missing[data$reported_year == 2018])
## THIS NUMBER (above) corresponds with the data presented in the MMP homepage.
## It seems fair to use this statistic (total_dead_and_missing) for calculations

## it is unclear when the two stats below are used by MMP
sum(data$minimum_estimated_number_of_missing[data$reported_year == 2019], na.rm = TRUE)
sum(data$number_dead[data$reported_year == 2019], na.rm = TRUE)

data %>%
  group_by(region_of_incident) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>%
  mutate(region_of_incident = reorder(region_of_incident, dead_and_missing)) %>%
  slice(1:10) %>%
  ggplot(aes(x = region_of_incident, y = dead_and_missing)) +
  geom_col() +
  coord_flip() +
  labs(
    title = "Where do migrants go missing?",
    subtitle = "Regions of incident",
    y = "Number dead or missing",
    x = element_blank()
  ) +
  cr::fix_bars()

data %>%
  group_by(migration_route) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>%
  mutate(migration_route = reorder(migration_route, dead_and_missing)) %>%
  slice(1:10) %>%
  ggplot(aes(x = migration_route, y = dead_and_missing)) +
  geom_col() +
  coord_flip() +
  labs(
    title = "Where do migrants go missing?",
    subtitle = "Migration routes",
    y = "Number dead or missing",
    x = element_blank()
  ) +
  cr::fix_bars()

data %>%
  filter(reported_year != 2020) %>%
  group_by(reported_year) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>%
  slice(1:10) %>%
  ggplot(aes(x = reported_year, y = dead_and_missing)) +
  geom_col() +
  scale_x_continuous(breaks = c(2014:2019)) +
  labs(
    title = "Changes over time",
    subtitle = "Dead and missing",
    y = "Number dead or missing",
    x = element_blank()
  ) +
  cr::fix_bars()

data$reported_month <-
  factor(
    data$reported_month,
    levels = c(
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    )
  )

data %>%
  filter(reported_year != 2020) %>%
  ggplot(aes(reported_month,-reported_year, fill = total_dead_and_missing)) +
  geom_tile(color = "white", size = 0.1) +
  scale_fill_viridis(name = "Number dead\nor missing", option = "C") +
  scale_y_continuous(breaks = c(-2014:-2019),
                     labels = c(2014:2019)) +
  theme(axis.text.x = element_text(angle = 45, vjust = 1)) +
  cr::drop_axis() +
  labs(title = "When migrants die and go missing",
       x = element_blank(), y = element_blank())

data %>%
  group_by(cause_of_death) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>%
  arrange(desc(dead_and_missing)) %>%
  mutate(cause_of_death = reorder(cause_of_death, dead_and_missing)) %>%
  slice(1:8) %>%
  ggplot(aes(x = cause_of_death, y = dead_and_missing)) +
  geom_col() +
  coord_flip() +
  labs(title = "How do migrants die??",
       y = "Number dead or missing",
       x = element_blank()) +
  cr::fix_bars()

top_cause_of_death <- c(
  "Drowning",
  "Sickness and lack of access to medicines",
  "Vehicle Accident",
  "Presumed drowning",
  "Unknown",
  "Starvation",
  "Shot",
  "Dehydration"
)
top_death_countries <- c(
  "North Africa",
  "Mediterranean",
  "Horn of Africa",
  "Middle East",
  "Central America",
  "Europe",
  "Caribbean"
)

data %>%
  filter(region_of_incident %in% top_death_countries,
         cause_of_death %in% top_cause_of_death) %>%
  group_by(region_of_incident, cause_of_death) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>%
  ungroup() %>%
  ggplot(aes(x = cause_of_death, y = dead_and_missing)) +
  geom_col() +
  facet_wrap(~ region_of_incident) +
  coord_flip() +
  labs(title = "How do migrants die?",
       y = "Number dead or missing",
       x = element_blank()) +
  cr::fix_bars()

# data %>%
#   group_by(region_of_incident) %>%
#   summarise(number_dead = sum(number_dead,na.rm=TRUE)) %>%
#   mutate(region_of_incident = reorder(region_of_incident, number_dead)) %>%
#   ggplot(aes(x=region_of_incident,y=number_dead)) +
#   geom_col() +
#   coord_flip() +
#   labs(title = "Where do migrants die?",
#        y = "Number dead",
#        x = element_blank()) +
#   cr::fix_bars()
#
# data %>%
#   group_by(region_of_incident) %>%
#   summarise(number_dead = sum(number_dead,na.rm=TRUE)) %>%
#   arrange(desc(number_dead))

data %>%
  group_by(region_of_incident) %>%
  summarise(total_dead_and_missing = sum(total_dead_and_missing, na.rm =
                                           TRUE)) %>%
  arrange(desc(total_dead_and_missing))

deadliest_incident <- data %>%
  filter(total_dead_and_missing == max(total_dead_and_missing))

deadliest_incident

data %>%
  filter(reported_year != 2020 &
           region_of_incident == "US-Mexico Border") %>%
  group_by(reported_year) %>%
  summarise(total_dead_and_missing = sum(total_dead_and_missing, na.rm =
                                           TRUE)) %>%
  ggplot(aes(x = reported_year, y = total_dead_and_missing)) +
  geom_col(fill = "#A80100") +
  labs(x = element_blank(), y = "Number dead or missing",
       title = "Deaths at the US-Mexico Border") +
  scale_x_continuous(breaks = c(2014:2019)) +
  cr::fix_bars() +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(
      fill = "black",
      colour = "black",
      size = 0.5,
      linetype = "solid"
    ),
    panel.grid.major = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    panel.grid.minor = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    title = element_text(colour = "white", family = "Inter"),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter")
  )

data %>%
  group_by(region_of_incident, reported_year) %>%
  summarise(deaths = sum(total_dead_and_missing)) %>%
  pivot_wider(names_from = reported_year, values_from = deaths) %>%
  mutate(percent_change = ((`2019` - `2014`) / `2014`) * 100)

data %>%
  group_by(reported_year) %>%
  summarise(deaths = sum(total_dead_and_missing)) %>%
  pivot_wider(names_from = reported_year, values_from = deaths) %>%
  mutate(percent_change = ((`2019` - `2014`) / `2014`) * 100)

##########################
## percent unknown deaths
data %>%
  mutate(unknown = ifelse(
    grepl("Unknown|unknown", data$cause_of_death),
    total_dead_and_missing,
    0
  )) %>%
  group_by(region_of_incident) %>%
  summarise(
    total_unknown = sum(unknown),
    total_deaths = sum(total_dead_and_missing),
    percent_unknown = (total_unknown / total_deaths)
  ) %>%
  mutate(region_of_incident = reorder(region_of_incident, percent_unknown)) %>%
  top_n(6, percent_unknown) %>%
  ggplot(aes(
    x = region_of_incident,
    y = percent_unknown,
    label = paste0(round(percent_unknown * 100), "%")
  )) +
  geom_col(fill = "#A80100") +
  coord_flip() +
  labs(title = "Percentage of Deaths Coded as 'Unknown'",
       y = element_blank(),
       x = element_blank()) +
  geom_text(
    colour = "white",
    hjust = 1.1,
    family = "Inter",
    size = 5
  ) +
  scale_y_continuous(labels = scales::percent, expand = expand_scale(mult = c(0, 0.001))) +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(
      fill = "black",
      colour = "black",
      size = 0.5,
      linetype = "solid"
    ),
    panel.grid.major = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    panel.grid.minor = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    plot.title = element_text(colour = "white", size = 18),
    axis.text = element_text(
      colour = "white",
      family = "Inter",
      size = 12
    ),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter")
  )

## International average: 6.8%
data %>%
  mutate(unknown = ifelse(
    grepl("Unknown", data$cause_of_death),
    total_dead_and_missing,
    0
  )) %>%
  summarise(
    total_unknown = sum(unknown),
    total_deaths = sum(total_dead_and_missing),
    percent_unknown = (total_unknown / total_deaths)
  )

##########################
## percent drowning deaths
data %>%
  mutate(drowning = ifelse(
    grepl("drowning|Drowning", data$cause_of_death),
    total_dead_and_missing,
    0
  )) %>%
  group_by(region_of_incident) %>%
  summarise(
    total_drowning = sum(drowning),
    total_deaths = sum(total_dead_and_missing),
    percent_drowning = (total_drowning / total_deaths)
  ) %>%
  mutate(region_of_incident = reorder(region_of_incident, percent_drowning)) %>%
  top_n(6, percent_drowning) %>%
  ggplot(aes(
    x = region_of_incident,
    y = percent_drowning,
    label = paste0(round(percent_drowning * 100), "%")
  )) +
  geom_col(fill = "#A80100") +
  coord_flip() +
  labs(title = "Percentage of Deaths Coded as 'Drowning'",
       y = element_blank(),
       x = element_blank()) +
  geom_text(colour = "white",
            hjust = 1.1,
            family = "Inter") +
  scale_y_continuous(labels = scales::percent, expand = expand_scale(mult = c(0, 0.001))) +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(
      fill = "black",
      colour = "black",
      size = 0.5,
      linetype = "solid"
    ),
    panel.grid.major = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    panel.grid.minor = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    title = element_text(colour = "white"),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter")
  )

## International average: 62.7%
data %>%
  mutate(drowning = ifelse(
    grepl("drowning|Drowning", data$cause_of_death),
    total_dead_and_missing,
    0
  )) %>%
  summarise(
    total_drowning = sum(drowning),
    total_deaths = sum(total_dead_and_missing),
    percent_drowning = (total_drowning / total_deaths)
  )

top_three_death_countries <- c("North Africa", "Mediterranean")

library(dplyr)
data_filtered <- data %>%
  mutate(region_of_incident = as.character(region_of_incident)) %>%
  mutate(
    region_of_incident = ifelse(
      region_of_incident %in% top_three_death_countries,
      region_of_incident,
      "All other regions"
    )
  ) %>%
  filter(reported_year %in% c(2015:2019)) %>%
  # region_of_incident %in% top_four_death_countries,
  group_by(region_of_incident, reported_year) %>%
  summarise(count = sum(total_dead_and_missing))

data_filtered %>%
  ggplot(aes(
    x = reported_year,
    y = count,
    fill = factor(
      region_of_incident,
      levels = c("North Africa", "Mediterranean", "All other regions")
    ),
    label = region_of_incident
  )) +
  geom_col(position = "fill", show.legend = FALSE) +
  geom_text(
    data = subset(data_filtered, reported_year == 2019),
    aes(
      x = reported_year,
      y = count,
      label = ifelse(
        region_of_incident == "North Africa",
        glue::glue('{region_of_incident}'),
        glue::glue('{region_of_incident}\n{count} deaths\n(2019)')
      )
    ),
    position = "fill",
    vjust = 1.25,
    size = 4,
    color = "white"
  ) +
  scale_fill_manual(values = c("#46B4D3", "#DB494C", "#86AA6D")) +
  scale_y_continuous(labels = scales::percent, expand = expand_scale(mult = c(0, 0.001))) +
  labs(x = element_blank(),
       y = element_blank(),
       title = "Where Deaths Occur") +
  # subtitle = "Top four regions") +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(
      fill = "black",
      colour = "black",
      size = 0.5,
      linetype = "solid"
    ),
    panel.grid.major = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    panel.grid.minor = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter"),
    # plot.title = element_text(colour = "white", family = "Inter", lineheight = 4),
    plot.title = element_text(margin = margin(
      t = 0,
      r = 0,
      b = 20,
      l = 0
    ))
  )

# pie for total

data_filtered_pie <- data %>%
  mutate(region_of_incident = as.character(region_of_incident)) %>%
  mutate(
    region_of_incident = ifelse(
      region_of_incident %in% top_three_death_countries,
      region_of_incident,
      "All other regions"
    )
  ) %>%
  filter(reported_year %in% c(2015:2019)) %>%
  # region_of_incident %in% top_four_death_countries,
  group_by(region_of_incident) %>%
  summarise(count = sum(total_dead_and_missing))

data_filtered_pie %>%
  ggplot(aes(
    x = "",
    y = count,
    fill = factor(
      region_of_incident,
      levels = c("North Africa", "Mediterranean", "All other regions")
    ),
    label = region_of_incident
  )) +
  geom_bar(width = 1, stat = "identity") +
  coord_polar("y", start = 0) +
  scale_fill_manual(values = c("#46B4D3", "#DB494C", "#86AA6D")) +
  theme(
    legend.title = element_blank(),
    legend.position = "top",
    legend.direction = "horizontal",
    plot.title = element_text(size = 24),
    axis.text.x = element_blank(),
    axis.title.x = element_blank(),
    axis.title.y = element_blank(),
    panel.border = element_blank(),
    panel.grid = element_blank(),
    axis.ticks = element_blank(),
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(
      fill = "black",
      colour = "black",
      size = 0.5,
      linetype = "solid"
    ),
    panel.grid.major = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    panel.grid.minor = element_line(
      size = 0,
      linetype = 'solid',
      colour = "black"
    ),
    axis.text = element_text(colour = "white", family = "Inter"),
    axis.line = element_line(colour = "white"),
    text = element_text(colour = "white", family = "Inter"),
  ) +
  cr::drop_axis() +
  labs(title = "Total Deaths as of 2019")
