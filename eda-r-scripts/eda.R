library(tidyverse)
library(ggplot2)
library(dplyr) 
library(viridis) 
library(lubridate) 
library(Interpol.T)
library(tidyr) 

cr::set_cr_theme()

data <- read.csv("../data/data.csv")
data <- janitor::clean_names(data)

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
  ggplot(aes(x=region_of_incident,y=dead_and_missing)) +
  geom_col() +
  coord_flip() +
  labs(title = "Where do migrants go missing?",
       subtitle = "Regions of incident",
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
       subtitle = "Migration routes",
       y = "Number dead or missing",
       x = element_blank()) +
  cr::fix_bars()

data %>% 
  filter(reported_year != 2020) %>% 
  group_by(reported_year) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>% 
  slice(1:10) %>% 
  ggplot(aes(x=reported_year,y=dead_and_missing)) +
  geom_col() +
  scale_x_continuous(breaks = c(2014:2019)) +
  labs(title = "Changes over time",
       subtitle = "Dead and missing",
       y = "Number dead or missing",
       x = element_blank()) +
  cr::fix_bars()

# data %>% 
#   filter(reported_year != 2020) %>% 
#   group_by(reported_year) %>%
#   summarise(number_dead = sum(number_dead, na.rm = TRUE)) %>% 
#   ggplot(aes(x=reported_year,y=number_dead)) +
#   geom_col() +
#   scale_x_continuous(breaks = c(2014:2019)) +
#   labs(title = "Changes over time",
#        subtitle = "Deaths only",
#        y = "Number dead",
#        x = element_blank()) +
#   cr::fix_bars()

data$reported_month <- factor(data$reported_month, levels = c("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"))

data %>% 
  filter(reported_year != 2020) %>% 
  ggplot(aes(reported_month,-reported_year,fill=total_dead_and_missing)) +
  geom_tile(color= "white",size=0.1) +  
  scale_fill_viridis(name="Number dead\nor missing",option ="C") +
  scale_y_continuous(breaks = c(-2014:-2019), labels = c(2014:2019)) +
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
  ggplot(aes(x=cause_of_death,y=dead_and_missing)) +
  geom_col() +
  coord_flip() +
  labs(title = "How do migrants die??",
       y = "Number dead or missing",
       x = element_blank()) +
  cr::fix_bars()

top_cause_of_death <- c("Drowning",                               
                        "Sickness and lack of access to medicines",
                        "Vehicle Accident",                        
                        "Presumed drowning",                    
                        "Unknown",                         
                        "Starvation",                            
                        "Shot",                           
                        "Dehydration")
top_death_countries <- c("North Africa", 
                         "Mediterranean",
                         "Horn of Africa",
                         "Middle East",
                         "Central America",
                         "Europe",
                         "Caribbean")

data %>% 
  filter(region_of_incident %in% top_death_countries,
         cause_of_death %in% top_cause_of_death) %>% 
  group_by(region_of_incident, cause_of_death) %>%
  summarise(dead_and_missing = sum(total_dead_and_missing)) %>% 
  ungroup() %>% 
  ggplot(aes(x=cause_of_death,y=dead_and_missing)) +
  geom_col() +
  facet_wrap(~region_of_incident) + 
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
  summarise(total_dead_and_missing = sum(total_dead_and_missing,na.rm=TRUE)) %>% 
  arrange(desc(total_dead_and_missing))

deadliest_incident <- data %>% 
  filter(total_dead_and_missing == max(total_dead_and_missing))

deadliest_incident

data %>% 
  filter(reported_year != 2020 & region_of_incident == "US-Mexico Border") %>% 
  group_by(reported_year) %>% 
  summarise(total_dead_and_missing = sum(total_dead_and_missing,na.rm=TRUE)) %>% 
  ggplot(aes(x = reported_year, y = total_dead_and_missing)) +
  geom_col(fill = "#A80100") +
  labs(x = element_blank(), y = "Number dead or missing",
       title = "Deaths at the US-Mexico Border") +
  scale_x_continuous(breaks = c(2014:2019)) +
  cr::fix_bars() +
  theme(
    plot.background = element_rect(fill = "black"),
    panel.background = element_rect(fill = "black",
                                    colour = "black",
                                    size = 0.5, linetype = "solid"),
    panel.grid.major = element_line(size = 0, linetype = 'solid',
                                    colour = "black"), 
    panel.grid.minor = element_line(size = 0, linetype = 'solid',
                                    colour = "black"),
    title = element_text(colour = "white"),
    axis.text = element_text(colour = "white"),
    axis.line = element_line(colour = "white"),
    axis.ticks = element_line(colour = "white")
    )
