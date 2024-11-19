<template>
    <div class="side-projects-details w-full flex flex-col gap-4 h-full">
        <div class="side-project grid grid-cols-[4fr_8fr] gap-4">
            <div class="project-image w-[100%]">
                <a
                    href="https://theater.kwalsh.dev"
                    target="_blank"
                    class="hover:opacity-50 transition-opacity"
                >
                    <img
                        src="@/assets/images/tomr-example.PNG"
                        width="100%"
                        height="auto"
                    />
                </a>
            </div>
            <div class="name-and-description">
                <div class="name text-4xl font-medium">
                    Theater of the Mind Reference
                </div>
                <div class="link text-xl opacity-75">
                    <a
                        href="https://theater.kwalsh.dev"
                        target="_blank"
                        class="font-extralight hover:text-elevation-1-color"
                        >// theater.kwalsh.dev</a
                    >
                </div>
                <div class="description text-lg font-light">
                    A web application that I created after having too many D&D
                    sessions where our group had trouble keeping track of where
                    everyone was relative to one another in combat scenarios.
                    The main features I've added based on feedback from the
                    group in addition to displaying moveable objects on a canvas
                    are a layer manager to update the relative z-indices of
                    objects, a dice roller widget, and a roll log to display
                    results of past dice rolls. Information about changes to the
                    canvas and results of dice rolls is distributed via
                    websocket and then updated in each player's client.
                </div>
            </div>
        </div>
        <div class="side-project grid grid-cols-[4fr_8fr] gap-4">
            <div class="project-image w-[100%]">
                <a
                    href="https://walshk1023.itch.io/bigger-than-your-worries"
                    target="_blank"
                    class="hover:opacity-50 transition-opacity"
                >
                    <img
                        src="@/assets/images/bigger-than-worries-example.PNG"
                        width="100%"
                        height="auto"
                    />
                </a>
            </div>
            <div class="name-and-description">
                <div class="name text-4xl font-medium">
                    Bigger than your Worries
                </div>
                <div class="link text-xl opacity-75">
                    <a
                        href="https://walshk1023.itch.io/bigger-than-your-worries"
                        target="_blank"
                        class="font-extralight hover:text-elevation-1-color"
                        >// walshk1023.itch.io/bigger-than-your-worries</a
                    >
                </div>
                <div class="description text-lg font-light">
                    A small game that I co-created with Adam VK using the Godot
                    Engine. We developed this as part of the 2024 GMTK Game Jam,
                    and completed the game within 48 hours - coming up with the
                    idea on Friday night and publishing the final changes on
                    Sunday afternoon. The game is fairly simple - you move a
                    circle around an area and absorb worry circles that are
                    smaller than you, while avoiding worry circles that are
                    bigger than you. As you absorb smaller worries, your circle
                    gets larger until you can absorb every worry. Additionally,
                    you can absorb a "challenge" which will allow you to absorb
                    a specific worry that is larger than you. The neat part -
                    you can use a form in the menu to customize the names and
                    sizes of each worry circle and associated challenge!
                </div>
            </div>
        </div>
    </div>
</template>
