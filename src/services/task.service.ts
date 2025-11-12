import prisma from "../prisma/client";

export const TaskService = {
    getAll: async () => {
        return prisma.task.findMany({ include: { list: true } });
    },

    create: async (data: { title: string; description?: string; listId: number }) => {
        const position = await prisma.task.count({ where: { listId: data.listId } });
        return prisma.task.create({
            data: { ...data, position },
        });
    },

    update: async (id: number, data: any) => {
        return prisma.task.update({ where: { id }, data });
    },

    delete: async (id: number) => {
        return prisma.task.delete({ where: { id } });
    },

    duplicate: async (id: number) => {
        const task = await prisma.task.findUnique({ where: { id } });
        if (!task) throw new Error("Task not found");
        return prisma.task.create({
            data: {
                title: task.title + " (copy)",
                description: task.description,
                position: task.position + 1,
                listId: task.listId,
            },

        })
    }


}